import { Review } from "@prisma/client"

const calculateReviewRatingAverage = (reviews: Review[]) => {
  if (reviews.length === 0) {
    // No reviews, return 0
    return 0
  }
  const total = reviews.reduce((acc, review) => {
    return acc + review.rating
  }, 0) / reviews.length
  return total.toFixed(1)
}

export default calculateReviewRatingAverage