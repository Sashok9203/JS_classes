// Task 1


class Square{
    #side_a
    constructor(height){
        this.#side_a = height;
    }
    
    getInfo(){console.info(`Side A : ${this.#side_a}`);}

    getArea(){return this.#side_a**2;}

    getPerimeter(){return this.#side_a*4;}

    get side_a(){return this.#side_a;}

    set side_a(value){this.#side_a = value > 0 ? value : 1;}

    get name (){return "Square"}
}

class Rectangle extends Square{
    #side_b
    constructor(height,width){
        super(height);
        this.#side_b = width;
    }
    
    getInfo(){console.info(`Side A : ${this.side_a}\nSide B : ${this.#side_b}`); }

    getArea(){return this.side_a * this.#side_b;}

    getPerimeter(){return this.side_a * 2 + this.#side_b * 2;}

    get side_b(){return this.#side_b;}

    set side_b(value){this.#side_b = value > 0 ? value : 1;}

    get name (){return "Rectangle"}
}

class Triangle extends Rectangle{
    #side_c
    constructor(side_a,side_b,side_c){
        super(side_a,side_b);
        this.#side_c = side_c;
    }
    
    getInfo(){console.info(`Side A : ${this.side_a}\nSide B : ${this.side_b}\nSide C : ${this.#side_c}\n`); }

    getArea(){
        let halfPerimeter = this.getPerimeter()/2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.side_a) * (halfPerimeter - this.side_b) * (halfPerimeter - this.#side_c));
    }

    getPerimeter(){return this.side_a + this.side_b + this.#side_c;}

    get side_c(){return this.#side_c;}

    set side_c(value){this.#side_c = value > 0 ? value : 1;}

    get name (){return "Triangle"}
}

console.info(`----------------- Task - 1 -----------------`);
let figures = [new Square(4),new Triangle(3,4,5),new Rectangle(2,4)];
figures.forEach(figure=>
    {
        console.info(`Figure name : ${figure.name}`);
        figure.getInfo();
        console.info(`Perimeter : ${figure.getPerimeter()}`);
        console.info(`Area : ${figure.getArea()}\n\n`);
    });


// Task 3

class News{
    
    #title
    #text
    #tags
    #date
    
    constructor(title,text,tags=[],date){
        this.#title = title;
        this.#tags = tags;
        this.#text = text;
        this.#date = new Date(date);
        if(this.#date > Date.now()) this.#date = Date.now();
       
    }
    #dateStr(){
        const msInDay = 1000*60*60*24;
        let temp = new Date(Date.now()); 
        let difference = Math.abs(parseInt(temp/msInDay) - parseInt(this.#date/msInDay));
        return difference === 0 ? "today":
        difference < 7 ? `${difference} days ago`:`${this.#date.getDate()}.${this.#date.getMonth()+1}.${this.#date.getFullYear()}`
    }
    print(){
        document.write(
            `<div class = "news">
            <h3>${this.#title}</h3>
            <h5>${this.#dateStr()}</h5>
            <p>${this.#text}</p>
            <span>${this.#tags.join(" ")}</span>
        </div>`
        );
    }

    get date(){return this.#date;}

    get tags(){return this.#tags;}

    get title(){return this.#title;}

    get Text(){return this.#text;}
}

function newsCompare(a, b) {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }


// Task 2

class NewsFeed{
  #newsArray
  constructor(){
    this.#newsArray = [];
  }

  get newsCount(){return this.#newsArray.length;}

  add(title,text,tags,date){this.#newsArray.push(new News(title,text,tags,date)); }

  delete(delTitle)
  {
    let index = this.#newsArray.indexOf(this.#newsArray.find(item=>item.title===delTitle));
    this.#newsArray.splice(index,1);
  }

  showAll(){document.body.innerHTML = '';this.#newsArray.forEach(item=>{item.print();});}

  sort(){
    this.#newsArray.sort((a, b)=> {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });
  }

 
  getNewsByTag(tag){
    let tagNews = [];
    this.#newsArray.forEach(item=>{
        item.tags.forEach(itemTag=>{
            if(tag === itemTag)
            tagNews.push(item);
        })
    });
    console.info(tagNews.length);
    return tagNews;
  }
}

let news = new NewsFeed();
news.add("New #1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lom","#ipm","#dolor" ,"#amet"],"2023-12-10");
news.add("New #2","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lorm","#ipsum","#dor" ,"#amet"],"2023-12-12");
news.add("New #3","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lorem","#ipsum","#door" ,"#amet"],"2023-11-10");
news.add("New #4","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lorm" ,"#ips","#door" ,"#ame"],"2023-12-1");
news.add("New #5","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lom","#ipum","#dolor" ,"#amt"],"2023-12-5");
news.add("New #6","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lom","#ips","#dol" ,"#amet"],"2023-12-7");
news.add("New #7","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lorem","#ipsu","#dolor" ,"#ame"],"2023-11-9");
news.add("New #8","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sed nemo iusto ipsa dolor possimus maxime optio quia? Voluptatibus culpa vel voluptas nam laudantium, amet repellat dicta molestiae quasi cum nisi, quis consectetur laborum.",["#lorem" ,"#psum","#dolor" ,"#ame"],"2023-12-9");
news.sort();
news.delete("New #8");
news.showAll();

//let tNews = news.getNewsByTag("#amet");
//tNews.forEach(item=>{item.print();});


