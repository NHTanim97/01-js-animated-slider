
    // ----------

    /*
        সব গুলা img array এর মধ্যে image variable
        ধরে রাখা হয়েছে ।
    */
    let image = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];


    /*
        img id grape করা হয়েছে ।

        *countIndex = -1;
        মানে countIndex এর value -1 এ set করা হয়েছে।
    */
    let myImg = document.getElementById('myImg');

    let countIndex = -1;



    /*
        * imgSlider() function call করা হয়েছে ।

        *countIndex ++
        countIndex এর মান ১ করে বারবে।

        *if(countIndex >= image.length)
        যদি countIndex বড় বা সমান হয় তাহলে image.length

        *countIndex = 0 
        আবার ০ তে আসবে 

        *myImg.src = image[countIndex];
        image array তে countIndex সেট করে দেয়া হয়েছে ।
    */

    function imgSlider(){
        countIndex ++;
        if(countIndex >= image.length){
            countIndex = 0;
            myImg.src = image[countIndex];
        }else{
            myImg.src = image[countIndex]
        }

        setTimeout('imgSlider()', 2000);
    }



    /*
        *window.onload 
        যখন page reload নিবে তখন imgSlider() function 
        কাজ করবে ।
    */
    window.onload = imgSlider();