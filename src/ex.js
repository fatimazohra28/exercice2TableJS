const tbody = document.getElementById("content");
      let persones = [];
      function update() {
        tbody.innerHTML = "";
        for (let i = 0; i < persones.length; i++) {
          const person = persones[i];
          let tr = document.createElement("tr");

          const td1 = document.createElement("td");
          td1.textContent = person.code;
          const td2 = document.createElement("td");
          td2.textContent = person.nom;
          const td3 = document.createElement("td");
          td3.textContent = person.pre;
          const td4 = document.createElement("td");
          td4.textContent = person.sem;
          const td5 = document.createElement("td");
          td5.textContent = person.fil;

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);

          tbody.appendChild(tr);

          tr.addEventListener("click", () => {
            person.select = !person.select;
            console.log(person.select);
            update();
          });
          if (person.select) {
            tr.classList.add("sel");
          }
        }
      }
      function aj() {
        if (
          (nom.value && code.value && pre.value && sem.value && fil.value) !==
          ""
        ) {
          let newPer = {
            code: code.value,
            nom: nom.value,
            pre: pre.value,
            sem: sem.value,
            fil: fil.value,
            select: false,
          };
          persones.push(newPer);
          update();
        }
      }
      function sp() {
        persones = persones.filter((i) => i.select == false);
        update();
      }
      function al(){
        code.value = nom.value = "";
      }