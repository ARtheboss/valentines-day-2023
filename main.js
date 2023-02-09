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
*/

const data = [
    {title: "Pimmy Roof", text: "The unlikeliest group of people hanging out together, where it all began.", image: null, date: new Date(2022, 10, 7)},
    {title: "Florance Shoots Her Shot", text: "Need me a girl that makes the first move.", image: "IMG_4218.jpg", date: new Date(2022, 10, 22)},
    {title: "The First Walk", text: "Even after I brutally rejected Florance the first time, we do end up going on a walk together. I lean into her while walking. I don't know what this means.", image: "IMG_4220.jpg", date: new Date(2022, 11, 6)},
    {title: "The Big C Walk", text: "The first one was so good we had to do it again. This one's famous for the Florance ID card incident.", image: "IMG_8182.jpg", date: new Date(2022, 11, 11)},
    {title: "The Firetrails Walk", text: "And then the third time round, I felt bold enough to I put my arm around her. She warmed my hands. It was nice. I knew then she liked me for sure.", image: "IMG_3665.jpg", date: new Date(2022, 11, 11)},
    {title: "The Room Visit", text: "Even though she was tired after her concert, she came to my room after. Even through some awkwardness, she stayed there till 4am, giving me some much appreciate company before my flight as well as some things to think about for the trip.", image: "IMG_4221.jpg", date: new Date(2022, 11, 19)},
    {title: "Toss", text: "The first time we hung out during the day. She felt brave and made a BeReal post.", image: "IMG_8879.jpg", date: new Date(2022, 11, 29)},
    {title: "Winter Formal", text: "The most perfect night. 'Nuff said.", image: "IMG_3806.jpg", date: new Date(2022, 12, 4)},
    {title: "The Bench", text: "She was leaving for a trip the next day, but safe to say, it did not stop us. We'd just broken a new barrier.", image: "IMG_4219.jpg", date: new Date(2022, 12, 5)},
    {title: "The Picnic Blanket", text: "Not in public?? Some questionable decisions here, especially considering the fact that I was sick.", image: "IMG_3854.jpg", date: new Date(2022, 12, 10)},
    {title: "We Start Dating", text: "Finally", image: null, date: new Date(2022, 12, 16)},
    {title: "Back in Berkeley", text: "After a painful month apart, we're finally reunited.", image: "IMG_4032.jpg", date: new Date(2023, 1, 15)},
    {title: "My Birthday", text: "She makes me feel really special.", image: "IMG_2770.jpg", date: new Date(2023, 1, 24)},
    {title: "Pimmy Roof 2", text: "After a Foothill dinner, we revisit where it all started.", image: "IMG_2891.jpg", date: new Date(2023, 1, 26)},
    {title: "Botanic Gardens", text: "Ignoring a brief ZipCar-related heart attack, the cutest date we've been on. Also got our best picture together.", image: "IMG_4141.jpg", date: new Date(2023, 1, 29)},
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