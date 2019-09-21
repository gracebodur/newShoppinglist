deleteButton();
checkButton();
addItem();

function addItem() {
  $( "#js-shopping-list-form" ).submit(function( event ) {
  event.preventDefault();
  
  $( ".js-shopping-list-entry" ).empty();
  let newItem = $('input[name="shopping-list-entry"]').val();
  $( `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">

            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`).appendTo(".shopping-list");
  });
}

function checkButton() {
  $(".shopping-list").on('click', function(event) {
    event.stopPropagation();
    $(event.target).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked')
  })
}

function deleteButton() {
  $(".shopping-list").on('click', '.shopping-item-delete', function(event) {
  $(event.target).closest('li').remove();
  })
}

