#!/bin/bash
curl -d "{
  \"question\": \"What's the Earth made of?\",
  \"validAnswers\": [\"Stone\", \"Rock\", \"Basalt\"],
  \"invalidAnswers\": [\"Cheese\", \"Ashes\", \"Garlic\", \"Lava\", \"Rubber\"]
}" http://localhost/api/add-question

curl -d "{
  \"question\": \"What's the Moon made of?\",
  \"validAnswers\": [\"Stone\", \"Rock\", \"Basalt\"],
  \"invalidAnswers\": [\"Cheese\", \"Ashes\", \"Garlic\", \"Lava\", \"Rubber\"]
}" http://localhost/api/add-question

curl -d "{
  \"question\": \"Is Elon Musk CEO of Twitter?\",
  \"validAnswers\": [\"Yes\"],
  \"invalidAnswers\": [\"No\"]
}" http://localhost/api/add-question

curl -d "{
  \"question\": \"Does chicken have teeth?\",
  \"validAnswers\": [\"No\"],
  \"invalidAnswers\": [\"Yes\"]
}" http://localhost/api/add-question
