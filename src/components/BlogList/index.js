import './index.css'

const BlogList = props => {
  const {each} = props
  const {category, type, joke, lang} = each
  console.log(each)
  return (
    <div className="con1">
      <p>Category:{category}</p>
      <p>Type:{type}</p>
      <p>Joke:{joke}</p>
      <p>Lang:{lang}</p>
    </div>
  )
}
export default BlogList
