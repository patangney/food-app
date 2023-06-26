import Stars from "@/app/components/Stars"
import calculateReviewRatingAverage from "@/utils/calculateReviewRatingAverage"
import { Review } from "@prisma/client"

const Ratings = ({reviews}: {reviews:Review[]}) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p><Stars reviews={reviews}/></p>
        <p className="text-reg ml-3">{calculateReviewRatingAverage(reviews)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">{reviews.length} Review{reviews.length === 1 ? "" : 's'}</p>
      </div>
    </div>
  )
}

export default Ratings