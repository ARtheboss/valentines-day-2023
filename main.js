// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

/*
Pimmy Roof - oct 7
Florance text - Oct 22
First walk - Nov 6
Big C walk - Nov 11
Firetrails walk - nov 17
Room - nov 19
Toss - nov 29
Winter formal - dec 4
Bench - dec 5
Picnic blanket - dec 10
Start dating - dec 16th
Reuinted - jan 15th
my birthday - jan 24th
Pimmy roof 2 - jan 26th
Botanic gardens - jan 29th
Valentines day - feb 14th
Hard launch - feb 17th
That day - mar 10th
Gym - mar 15th
Double date - mar 18th
Birthday - apr 4th
Beach day - apr 15th
4/20 - apr 20th
Cal day - apr 22th
formal dress up - may 5th
Move out - may 12th
Monday = funday - may 15th
One day of fun - may 22nd
*/

const data = [
    {title: "Pimmy Roof", text: "The unlikeliest group of people hanging out together, where it all began.", image: null, date: new Date(2022, 9, 7)},
    {title: "Florance Shoots Her Shot", text: "Need me a girl that makes the first move.", image: "IMG_4218.jpg", date: new Date(2022, 9, 22)},
    {title: "The First Walk", text: "Even after I brutally rejected Florance the first time, we do end up going on a walk together. To be honest, then, I didn't know what this meant.", image: "IMG_4220.jpg", date: new Date(2022, 10, 6)},
    {title: "The Big C Walk", text: "The first one was so good we had to do it again. This one's famous for the Florance ID card incident.", image: "IMG_8182.jpg", date: new Date(2022, 10, 11)},
    {title: "The Firetrails Walk", text: "And then the third time round, I felt bold enough to I put my arm around her. She warmed my hands. I knew then she liked me for sure.", image: "IMG_3665.JPG", date: new Date(2022, 10, 11)},
    {title: "The Room Visit", text: "Even though she was tired after her concert, she came to my room after. Even through some awkwardness, she stayed there till 4am, giving me some much appreciate company before my flight as well as some things to think about for the trip.", image: "IMG_4221.jpg", date: new Date(2022, 10, 19)},
    {title: "Toss", text: "The first time we hung out during the day. She felt brave and made a BeReal post.", image: "IMG_8879.jpg", date: new Date(2022, 10, 29)},
    {title: "Winter Formal", text: "The most perfect night. 'Nuff said.", image: "IMG_3806.JPG", date: new Date(2022, 11, 4)},
    {title: "The Bench", text: "She was leaving for a trip the next day, but safe to say, it did not stop us. We'd just broken a new barrier.", image: "IMG_4219.jpg", date: new Date(2022, 11, 5)},
    {title: "The Picnic Blanket", text: "Not in public?? Some questionable decisions here, especially considering the fact that I was sick.", image: "IMG_3854.JPG", date: new Date(2022, 11, 10)},
    {title: "We Start Dating", text: "Finally", image: null, date: new Date(2022, 11, 16)},
    {title: "Back in Berkeley", text: "After a painful month apart, we're finally reunited.", image: "IMG_4032.JPG", date: new Date(2023, 0, 15)},
    {title: "My Birthday", text: "She makes me feel really special.", image: "IMG_2770.jpg", date: new Date(2023, 0, 24)},
    {title: "Pimmy Roof 2", text: "After a Foothill dinner, we revisit where it all started.", image: "IMG_2891.jpg", date: new Date(2023, 0, 26)},
    {title: "Botnaic Gardens", text: "Ignoring a brief ZipCar-related heart attack, the cutest date we've been on. Also got our best picture together.", image: "IMG_4141.JPG", date: new Date(2023, 0, 29)},
    {title: "Valentine's Day", text: "From making flowers together, to this amazing website, to calculated story posts, and finally a walk—the perfect day.", image: "IMG_4271.JPG", date: new Date(2023, 1, 14)},
    {title: "The Hard Launch", text: "Florance makes a post with me. She insists it's a soft launch. But I know better.", image: "IMG_82AAC8A475E3-1.jpeg", date: new Date(2023, 1, 17)},
    {title: "That Day", text: "We skip all classes on a Friday and do everything our heart desires ;)", image: "IMG_4468.JPG", date: new Date(2023, 2, 10)},
    {title: "Gym Day!", text: "I force her to go to the gym for the first time. Health is wealth.", image: "IMG_48DC9A002523-1.jpeg", date: new Date(2023, 2, 15)},
    {title: "I <3 U", text: "She tells me she loves me. I tell her I love her.", image: "ILoveYou.png", date: new Date(2023, 2, 22)},
    {title: "Double Date", text: "We go on a double date with Chris and Cat. Pretty fun. Stuff feels pretty official at this point.", image: "IMG_4517.JPG", date: new Date(2023, 3, 18)},
    {title: "Her Birthday", text: "I plan the best birthday suprise ever.", image: "IMG_5134.jpg", date: new Date(2023, 3, 4)},
    {title: "Beach Time", text: "With some of my friends, we all go to the beach together. It's a lot of fun. Very romantic. We do a little roleplay.", image: "IMG_5471.jpg", date: new Date(2023, 3, 15)},
    {title: "4/20", text: "Another day we spend together, and get the best view from Evans. I love spending time with her.", image: "IMG_5802.jpg", date: new Date(2023, 3, 20)},
    {title: "Cal Day", text: "Laying on the grass with her for an hour while that music was playing was one of the most ethereal experiences I've ever had.", image: "IMG_5828.jpg", date: new Date(2023, 3, 22)},
    {title: "Formal Dress", text: "When we realized we both had to dress up for different reasons, we thought: 'Why not dress up together?'", image: "IMG_6174.jpg", date: new Date(2023, 4, 5)},
    {title: "Move Out", text: "Sad moment. Our time with the dorms, where we our relationship begun, comes to an end.", image: "P1400032.jpg", date: new Date(2023, 4, 12)},
    {title: "Monday = Funday", text: "I drive all the way down to Los Gatos to see her. We spend a great couple of hours together.", image: "P1400201.jpg", date: new Date(2023, 4, 15)},
    {title: "Goodbye Before Summer", text: "We spend the most perfect day together, one last time before we separate for three months. And lower our rice purity score quite a bit.", image: "IMG_7022.jpg", date: new Date(2023, 4, 22)},
]

var itemdata = [];
data.forEach(function(d, i){
    itemdata.push(
        {
            id: i,
            content: d.title,
            start: d.date,
        }
    );
});

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet(itemdata);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);

timeline.on("click", function (properties) {
    var id = properties.item;
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var newItemDetails = document.createElement("div");
    newItemDetails.classList.add("item-details");
    newItemDetails.id = "item-details-" + id;
    var imgString = (data[id].image) ? `<img class="item-details-image" src="images/` + data[id].image + `">` : ``;
    newItemDetails.innerHTML = `
        <div class="item-details-title">`+data[id].title+`</div>
        <div class="item-details-date">`+ data[id].date.toLocaleDateString('en-US', dateOptions) +`</div>
        ` + imgString + `
        <div class="item-details-text">` + data[id].text + `</div>
    `;
    dragElement(newItemDetails);
    var closeItemDetails = document.createElement("div");
    closeItemDetails.innerHTML = "x";
    closeItemDetails.classList.add("close-item-details");
    closeItemDetails.addEventListener("click", function (){
        document.getElementById('item-details-' + id).remove();
    });
    newItemDetails.appendChild(closeItemDetails);
    document.body.appendChild(newItemDetails);

});

document.getElementById('close-item-details')

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}