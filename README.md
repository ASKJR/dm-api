# dm-api

Pré-requisito:
1) Docker instalado.

Etapas para rodar a API:

1) Na raíz do diretório criar um arquivo de variável de ambiente chamado <b>config.env</b><br>
  1.1) Adicionar os seguintes valores no arquivo <b>config.env:</b><br><br>
  NODE_ENV=dev<br>
  GIPHY_API_KEY=bE2gFLtYKHbynXPyjKrLrhc5x4b190FX<br>

2) Na raíz do diretório executar os seguintes comandos: <br>
  2.1) docker build -t api .  <br>
  2.2) docker run -p 4000:4000 -d api <br>
  
3) Exemplo: Acessar no Browser / Postman (GET) uma url: http://localhost:4000/recipes/?i=chicken,tomato,garlic <br>
  3.1) Saída
 ```javascript 
  {
   "keywords":[
      "chicken",
      "tomato",
      "garlic"
   ],
   "recipes":[
      {
         "title":"Easy Tuscan Chicken",
         "ingredients":[
            "cannellini beans",
            "chicken",
            "garlic",
            "italian seasoning",
            "olive oil",
            "tomato"
         ],
         "link":"http://www.recipezaar.com/Easy-Tuscan-Chicken-336005",
         "gif":"https://media4.giphy.com/media/YP1Jb0JNc7kqFDbdjm/giphy.gif?cid=51298e7c9mndyjaxfgxdqp8ak3lqvhr8w11km3uv749wcaek&rid=giphy.gif"
      },
      {
         "title":"Stewed Chicken Taco Meat",
         "ingredients":[
            "chicken",
            "chicken broth",
            "garlic",
            "monterey jack cheese",
            "taco seasoning",
            "tomato"
         ],
         "link":"http://www.recipezaar.com/Stewed-Chicken-Taco-Meat-140026",
         "gif":"https://media1.giphy.com/media/l2JI48S4tmnG4qi7m/giphy.gif?cid=51298e7ctm9869ygm0v5bdar712mdwartcqf10y2bvchl78v&rid=giphy.gif"
      },
      {
         "title":"Artichoke Chicken",
         "ingredients":[
            "artichoke",
            "butter",
            "chicken",
            "garlic",
            "tomato",
            "tomato juice"
         ],
         "link":"http://www.recipezaar.com/Artichoke-Chicken-54025",
         "gif":"https://media1.giphy.com/media/l3mZo9oAIQflshUfC/giphy.gif?cid=51298e7ctj9uxk3zf1evdmd4b2eang4sanyeko90xlecanoz&rid=giphy.gif"
      },
      {
         "title":"Bruschetta Chicken",
         "ingredients":[
            "basil",
            "chicken",
            "garlic",
            "mozzarella cheese",
            "stuffing",
            "tomato"
         ],
         "link":"http://www.recipezaar.com/Bruschetta-Chicken-189659",
         "gif":"https://media1.giphy.com/media/l3mZo9oAIQflshUfC/giphy.gif?cid=51298e7c79ylr2g1kyupw7t6px6laxdrw8agttfq00hanp7b&rid=giphy.gif"
      },
      {
         "title":"Pressed Chicken with Yellow Squash and Tomatoes",
         "ingredients":[
            "chicken",
            "garlic",
            "marjoram",
            "olive oil",
            "tomato",
            "yellow squash"
         ],
         "link":"http://www.epicurious.com/recipes/food/views/Pressed-Chicken-with-Yellow-Squash-and-Tomatoes-243169",
         "gif":"https://media3.giphy.com/media/75yk3rYrClLyM/giphy.gif?cid=51298e7cj9hyliwmwrshat9mlw4ws5s7c4im3hzm4yamc1vc&rid=giphy.gif"
      },
      {
         "title":"Sundried Chicken",
         "ingredients":[
            "chicken",
            "chilli",
            "garlic",
            "olive oil",
            "onions",
            "tomato"
         ],
         "link":"http://www.nibbledish.com/people/telliecoin/recipes/sundried-chicken",
         "gif":"https://media1.giphy.com/media/l3mZo9oAIQflshUfC/giphy.gif?cid=51298e7cm20r7fk6t5d2is1dhuqtak10jfyaqnnzleyiwx8u&rid=giphy.gif"
      },
      {
         "title":"\nSkillet Chicken And Mushroom Recipe\n\n",
         "ingredients":[
            "butter",
            "chicken",
            "env",
            "garlic",
            "onions",
            "tomato"
         ],
         "link":"http://cookeatshare.com/recipes/skillet-chicken-and-mushroom-34775",
         "gif":"https://media1.giphy.com/media/Aj9EHGocwb4bu/giphy.gif?cid=51298e7c3amjdatbj4b3igrfs6qk8hotakmq3vagjjsdsm57&rid=giphy.gif"
      },
      {
         "title":"\nChicken Napolean Recipe\n\n",
         "ingredients":[
            "bread",
            "chicken",
            "garlic",
            "tomato",
            "vegetable oil",
            "white wine"
         ],
         "link":"http://cookeatshare.com/recipes/chicken-napolean-39570",
         "gif":"https://media1.giphy.com/media/Aj9EHGocwb4bu/giphy.gif?cid=51298e7cxhx0uf1y26qjefu47tpns06nszaqoqx13tfbl85k&rid=giphy.gif"
      },
      {
         "title":"\nChicken Cacciatore Recipe\n\n",
         "ingredients":[
            "chicken",
            "garlic",
            "oregano",
            "parmesan cheese",
            "salt",
            "tomato"
         ],
         "link":"http://cookeatshare.com/recipes/chicken-cacciatore-38537",
         "gif":"https://media1.giphy.com/media/Aj9EHGocwb4bu/giphy.gif?cid=51298e7cnixtqncfv7pbwlw8en4b83mqrw1by3u2h10y9etg&rid=giphy.gif"
      },
      {
         "title":"\nEasy Chicken Cacciatora Recipe\n\n",
         "ingredients":[
            "chicken",
            "garlic",
            "mushroom",
            "olive oil",
            "oregano",
            "tomato"
         ],
         "link":"http://cookeatshare.com/recipes/easy-chicken-cacciatora-35854",
         "gif":"https://media4.giphy.com/media/YP1Jb0JNc7kqFDbdjm/giphy.gif?cid=51298e7cgqoqsme88qsq4vnbt32orkkaeftsdgwkphdvmhl1&rid=giphy.gif"
      }
   ]
}
```
