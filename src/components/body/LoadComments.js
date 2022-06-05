import dateFormat from 'dateformat'

function LoadComments({comments}){
    
    return (
        comments.map(comment => {
            return (
                <div className='mt-3' key={comment.id}>
                    <h1 className="font-bold">{comment.author}:</h1>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            )
        })
       
    )
}


export default LoadComments;