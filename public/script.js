document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('.delete').forEach((remove => {
    remove.addEventListener('click', deleteReview)
  }))
})

const deleteReview = (event) => {
  const review = JSON.parse(event.target.value)
  if (confirm('Are you sure you want to delete this review?')) {
    fetch(`/reviews/delete/${review.id}`, {
      method: 'post'
    }).then(success => {
      event.target.parentNode.parentNode.parentNode.remove()
    }).catch(console.log)
  }
}
