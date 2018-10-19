const $polaroids = document.getElementsByClassName('polaroid')

// stack the images vertically and moves them slightly and rotates them
$polaroids[0].style.transform = `rotateZ(${Math.floor(Math.random() * 10)}deg)`
for (let i = 1; i < $polaroids.length; i++) {
  $polaroids[i].style.zIndex = i
  $polaroids[i].style.transform = `translate(${Math.floor(Math.random() * 25) -
    10}%, ${Math.floor(Math.random() * 40)}px) rotateZ(${Math.floor(
    Math.random() * 5
  )}deg)`
}

// This JavaScript code made with assistance from Stephen Gagne
