# image-search

Project for FCC

<h3>Pass in a search string to receive a JSON response with links and information</h3>
        <h4>Example:</h4>
        <p>https://thekholm80-image-search.herokuapp.com/search/cats</p>
        <h4>Returns:</h4>
        <div class='code'>[{"previewHeight":99,<br>
          <div>"likes":69,</div>
          <div>"favorites":66,</div>
          <div>"tags":"cat, pet, eyes",</div>
          <div>"webformatHeight":425,</div>
          <div>"views":21363,</div>
          <div>"webformatWidth":640,</div>
          <div>"previewWidth":150,</div>
          <div>"comments":8,</div>
          <div>"downloads":8151,</div>
          <div>"pageURL":"https://pixabay.com/en/cat-pet-eyes-animal-kitty-468232/",</div>
          <div>"previewURL":"https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232_150.jpg",</div>
          <div>"webformatURL":"https://pixabay.com/get/ed33b90d2bf61c2ad65a5854e3494391e27fe3c818b518479df7c971a3e4_640.jpg",</div>
          <div>"imageWidth":3000,</div>
          <div>"user_id":151412,</div>
          <div>"user":"amayaeguizabal",</div>
          <div>"type":"photo",</div>
          <div>"id":468232,</div>
          <div>"userImageURL":"https://cdn.pixabay.com/user/2014/02/14/08-35-49-318_250x250.jpg",</div>
          <div>"imageHeight":1993</div>},
        </div>
        <div class='code'>{"previewHeight":99,</br>
          <div>"likes":243,</div>
          <div>"favorites":165,</div>
          <div>"tags":"cat, feline, furry",</div>
          <div>"webformatHeight":425,</div>
          <div>"views":39720,</div>
          <div>"webformatWidth":640,</div>
          <div>"previewWidth":150,</div>
          <div>"comments":34,</div>
          <div>"downloads":11668,</div>
          <div>"pageURL":"https://pixabay.com/en/cat-feline-furry-pet-close-up-401124/",</div>
          <div>"previewURL":"https://cdn.pixabay.com/photo/2014/07/24/18/40/cat-401124_150.jpg",</div>
          <div>"webformatURL":"https://pixabay.com/get/ed35b00e2af01c2ad65a5854e3494391e27fe3c818b518479df7c971a3e4_640.jpg",</div>
          <div>"imageWidth":3008,</div>
          <div>"user_id":63554,</div>
          <div>"user":"Amandad",</div>
          <div>"type":"photo",</div>
          <div>"id":401124,</div>
          <div>"userImageURL":"https://cdn.pixabay.com/user/2014/02/09/18-00-03-861_250x250.jpg",</div>
          <div>"imageHeight":2000</div>},<br>
          ... ]
        </div>
        <h3>Search Strings</h3>
        <h4>Combine words with a + to form a search string</h4>
        <p>https://thekholm80-image-search.herokuapp.com/search/cats+funny</p>
        <p>https://thekholm80-image-search.herokuapp.com/search/birds+wearing+hats</p>
        <h3>Pagination</h3>
        <h4>Results can be paginated by appending to the url:</h4>
        <p>https://thekholm80-image-search.herokuapp.com/search/cats+funny?page=1</p>
        <p>https://thekholm80-image-search.herokuapp.com/search/birds+wearing+hats?page=2</p>
