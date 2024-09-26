


/* project - 6 
        -> based on -> random color genereate 
                    -> setInterval and clearInterval.

   project - 5 -> keyboard key testing 

                    # tarun stackblitz project link
[click for tarun project](https://stackblitz.com/edit/dom-project-chaiaurcode-78foij)
*/


// by this easily understand random color generating algotithm
const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16)
    console.log("index: ",index)
    color += hex[index];
    console.log("colorCode ",color);
  }