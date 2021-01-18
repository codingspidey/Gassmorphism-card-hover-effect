let vm = new Vue({
    el: "#app",
    data: {
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      cards: [
        {
          index: "01",
          title: "Card 1",
          link: "#"
        },
        {
          index: "02",
          title: "Coding Spidey",
          link: "#"
        },
        {
          index: "03",
          title: "Card 3",
          link: "#"
        }
      ]
    },
    mounted() {
      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 20,
        reverse: true,
        speed: 400,
        glare: true,
        "max-glare": 0.6
      });
    }
  });
  