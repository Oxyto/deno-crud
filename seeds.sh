#!/bin/bash
curl -d "{
  \"question\": \"What's the Earth made of?\",
  \"validAnswers\": [\"Stone\", \"Rock\", \"Basalt\"],
  \"invalidAnswers\": [\"Cheese\", \"Ashes\", \"Garlic\", \"Lava\", \"Rubber\"]
}" http://localhost/api/add-question
