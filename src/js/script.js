class Main{
  constructor(){
    this.tabList = document.querySelector("#tabs"); 
    this.personality_link_pill = document.querySelector("#personality-link");
    this.personality_link = "https://www.16personalities.com/profiles/ebe833c4b2b7d"; 
    this.osu_link_pill = document.querySelector("#osu-link");
    this.osu_link = "https://osu.ppy.sh/users/31385105";
    this.ini(); 
  }

  /** @description Instantiates website events */
  ini(){
    this.instantiateEvents(); 
    this.configureTabs(); 
  }

  /** @description Instantiates events on page */
  instantiateEvents(){
    this.personality_link_pill.addEventListener("click", () => {
      window.open(this.personality_link);
    }); 

    this.osu_link_pill.addEventListener("click", () => {
      window.open(this.osu_link);
    }); 
  }

  /** @description Instantiates events on page */
  configureTabs(){
    for(const tab of this.tabList.children){
      tab.addEventListener("click", (e) => {
        const element = e.target;
        const directTo = element.textContent.toLowerCase();
        const directedElement = document.querySelector(`#${directTo}`); 

        if(document.getElementById("current")){
          const activeTab = document.querySelector("#current");
          const activeTabPointer = activeTab.textContent.toLowerCase(); 
          activeTab.removeAttribute("id");
          document.getElementById(`${activeTabPointer}`).style.display = "none"; 
        }

        directedElement.style.display = "block"; 
        element.setAttribute("id", "current"); 
      });
    }
  }
}

new Main(); 