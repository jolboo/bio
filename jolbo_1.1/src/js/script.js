class Main{
  constructor(){
    this.tabList = document.querySelector("#tabs"); 
    this.personalityLinkPill = document.querySelector("#personality");
    this.instaLinkPill = document.querySelector("#Insta"); 
    this.osuLinkPill = document.querySelector("#osu");
    this.hoyoLinkPill = document.querySelector("#Hoyolab");

    this.XLinkPill = document.querySelector("#X");
    this.redditLinkPill = document.querySelector("#Reddit");
    this.twitchLinkPill = document.querySelector("#Twitch");
    this.steamLinkPill = document.querySelector("#Steam");


    this.personalityLink = "https://www.16personalities.com/profiles/ebe833c4b2b7d"; 
    this.osuLink = "https://osu.ppy.sh/users/31385105";
    this.instaLink = "https://www.instagram.com/inosuwuu/";
    this.hoyoLink = "https://www.hoyolab.com/accountCenter/postList?id=143926187"; 

    this.XLink = "https://twitter.com/_jolbo_";
    this.redditLink = "https://www.reddit.com/user/_jolbo_";
    this.twitchLink = "https://www.twitch.tv/jolboooo"; 
    this.steamLink = "https://steamcommunity.com/profiles/76561199551427354/";
    this.ini(); 
  }

  /** @description Instantiates website events */
  ini(){
    this.instantiateEvents(); 
    this.configureTabs(); 
  }

  /** @description Instantiates events on page */
  instantiateEvents(){
    this.personalityLinkPill.addEventListener("click", this.openLink(this.personalityLink)); 
    this.osuLinkPill.addEventListener("click", this.openLink(this.osuLink)); 
    this.instaLinkPill.addEventListener("click", this.openLink(this.instaLink)); 
    this.hoyoLinkPill.addEventListener("click", this.openLink(this.hoyoLink));

    this.XLinkPill.addEventListener("click", this.openLink(this.XLink));
    this.redditLinkPill.addEventListener("click", this.openLink(this.redditLink));
    this.twitchLinkPill.addEventListener("click", this.openLink(this.twitchLink));
    this.steamLinkPill.addEventListener("click", this.openLink(this.steamLink));
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

  /** @description, shortcut to open link */
  openLink(link = "") {
    return () => window.open(link); 
  }
}

new Main(); 