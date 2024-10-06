const firstContents = document.querySelectorAll(".accordion .content");
console.log(firstContents);
firstContents[0].style.display="block";

const titles =document.querySelectorAll(".accordion .title");
titles.forEach((title)=>{
    title.addEventListener("click",() =>{
        document.querySelectorAll(".content").forEach((item)=>{
            item.style.display = "none"; /*처음은 안보이게 선택되어진 거만 보이게 선택 안되면 안보이게*/
        });
        titles.forEach((otherTitle)=>{
            if(otherTitle !== title) otherTitle.classList.remove("active");
        });
        let content = title.nextElementSibling;
        if(title.classList.contains("active")) {
            title.classList.remove("active");
            content.style.display = "none";
        } else {
            title.classList.add("active");
            content.style.display = "block";
        }
        //nextElementSibling 현재 다음번째 형제요소
        //contains() 앞에 그 클래스가 있으면 true고 없으면 false
    });
});