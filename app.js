const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./img/pancakes.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./img/pizza.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit `,
    },
    {
      id: 3,
      title: "coconut dream",
      category: "shakes",
      price: 6.99,
      img: "./img/milkshake1.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
    {
      id: 4,
      title: "swedish fika",
      category: "breakfast",
      price: 20.99,
      img: "./img/coffe&bun.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./img/omelett.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
    {
      id: 6,
      title: "strawberry fusion",
      category: "shakes",
      price: 18.99,
      img: "./img/bananamilkshake.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
    {
      id: 7,
      title: "toast",
      category: "breakfast",
      price: 8.99,
      img: "./img/toast.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
    {
      id: 8,
      title: "paleo classic",
      category: "lunch",
      price: 12.99,
      img: "./img/avocado.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./img/pineapplemilkshake.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
    {
      id: 10,
      title: "meat your requirements",
      category: "dinner",
      price: 22.99,
      img: "./img/steak.jpeg",
      desc: `lorem ipsum dolor sit amet consectetur adipiscing elit`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }