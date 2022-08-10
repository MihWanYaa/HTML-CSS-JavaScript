var danhsach = [["../static/shoes/shoes1.png", "MLB BIGBALL CHUNKY", "2 299 000 VND"],
["../static/shoes/shoes2.png", "MLB MONOGRAM", "1 790000 VND"], ["../static/shoes/shoes3.png", "MLB ORIGINS BLACK", "1 599 000 VND"],
["../static/shoes/shoes4.png", "MLB ORIGINS DENIM", "1 899 000 VND"],
["../static/shoes/shoes5.png", "MLB NY CHUNKY", "2 199 000 VND"], ["../static/shoes/shoes6.png", "MLB MONOGRAM", "1 790000 VND"],
["../static/shoes/shoes7.png", "MLB LOW BOSTON", "3 090 000 VND"], ["../static/shoes/shoes8.png", "MLB ORIGIN NY", "1 599 000 VND"],
["../static/shoes/shoes9.png", "MLB CHUNKY LITE", "2 590 000 VND"], ["../static/shoes/shoes10.png", "MLB CHUNKY JOGGER", "3 390 000 VND"], 
["../static/shoes/shoes11.png", "MLB MULE BOSTON", "2 690 000 VND"], 
["../static/shoes/shoes12.png", "MLB MULE LA", "1 690 000 VND"], 
["../static/shoes/shoes13.png", "MLB BIGBALL CHUNKY", "2 890 000 VND"], 
["../static/shoes/shoes14.png", "MLB CHUNKY AIR", "3 990 000 VND"],  
["../static/shoes/shoes16.png", "MLB MONO CANVAS", "2 690 000 VND"]
]
var all_student = document.getElementById("student")
var info_stu = document.getElementsByClassName("student_info")

function change_info(num) {
    info_stu[num].getElementsByTagName("button")[0].setAttribute("onclick", "delete_student(" + String(num) + ")")
    info_stu[num].getElementsByTagName("img")[0].setAttribute("src", danhsach[num][0])
    info_stu[num].getElementsByTagName("h4")[0].innerText = danhsach[num][1]
    info_stu[num].getElementsByTagName("p")[0].innerText = danhsach[num][2]
}




function delete_student(num) {
    danhsach.splice(num, 1)
    info_stu[num].remove()
    for (let index = 0; index < danhsach.length; index++) {
        change_info(index)
    }
}

function write_info(num) {
    var student_create = document.getElementById('student')
    student_create.innerHTML += "<div class='col-lg-3 col-6 px-3 student_info my-3' ><div class='bg-white' align='center'><div align='right'><button class='btn btn-close' onclick='delete_student(0)'></button></div><div class='py-4'><img src='' width='270px' class='profile_pic' ></div><h4></h4><p></p></div></div>"
    change_info(num)
}
for (let index = 0; index < danhsach.length; index++) {
    write_info(index)
}


function new_student() {
    var new_student_name = document.getElementById("new_student_name").value.trim()
    var new_price = document.getElementById("new_price").value

    if (new_student_name == "" || new_student_name.length < 3) {
        return alert("Invalid name")
    }
    if (new_price == "") {
        return alert("Invalid price")
    }
    document.getElementById("new_student_name").value = ""
    document.getElementById("new_price").value = ""

    var result=''
    var count=0
    for (let index = 0; index < new_price.length; index++) {
        result+=new_price.charAt(new_price.length-1-index)
        count+=1
        if (count%3==0) {
            count=0
            result+=' '
        }
    }
    var new_result=''
    for (let index = 0; index < result.length; index++) {
        new_result+=result.charAt(result.length-1-index)
        
    }
    danhsach.push(["../static/img-not-available.png", new_student_name.toUpperCase(), new_result+" VND"])
    write_info(danhsach.length - 1)

}