# News Article NLP Evaluator

Forked from https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp

# Install the project

1. Clone the project:
   ```bash
   git clone https://github.com/bfrangi/nlp-news-evaluator.git
   ```

2. Install the dependencies:
   ```bash
   cd nlp-news-evaluator
   npm install
   ```

3. Add Aylien API keys to a `.env` folder in the root of the project. The file should look like this:
   ```
   API_ID=**************************
   API_KEY=**************************
   ``` 

# Run the project

1. Build the project:
   ```bash
   npm run build-prod
   ```
2. Start the server:
   ```bash
   npm run start
   ```
3. Open the browser at http://localhost:8081

4. If you want to run the webpack-dev-server, run:
   ```bash
   npm run build-dev
   ```

## Run tests

You can run the tests with:
```bash
npm run test
```