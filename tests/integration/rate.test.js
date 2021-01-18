import server from "../utils/server.js";


describe('Exchange Rate Endpoint', () => {
    it('should return exchange rates', async () => {
        const response = await server().get('/api/rates');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results');
        expect(response.body).toHaveProperty('results.date');
        expect(response.body).toHaveProperty('results.base');
        expect(response.body).toHaveProperty('results.rates');
    });

    it('should return exchange rate with base selected', async () => {
        const response = await server().get('/api/rates?base=USD');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results.base', 'USD');
    });

    it('should return exchange rate with currencies selected', async () => {
        const response = await server().get('/api/rates?currency=USD,CZK');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results.rates.USD');
        expect(response.body).toHaveProperty('results.rates.CZK');
    });

    it('should return exchange rate with currencies selected and base specified', async () => {
        const response = await server().get('/api/rates?currency=USD,CZK&base=JPY');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('results.rates.USD');
        expect(response.body).toHaveProperty('results.rates.USD');
        expect(response.body).toHaveProperty('results.base', 'JPY');
    });

    describe('Bad Request', () => {
        it('should return 400 for invalid base specified', async () => {
            const response = await server().get('/api/rates?base=null');

            expect(response.status).toBe(400);
            expect(response.body).toMatchObject({
                success: false
            });
        });
        it('should return 400 for invalid currency specified', async () => {
            const response = await server().get('/api/rates?currency=null');

            expect(response.status).toBe(400);
            expect(response.body).toMatchObject({
                success: false
            });
        });
    });
});