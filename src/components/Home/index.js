import {Component} from 'react'
import BlogList from '../BlogList'
import './index.css'

class Home extends Component {
  state = {data: []}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=E
N&amount=10`)
    const data = await response.json()
    this.setState({data: data.jokes})
  }

  render() {
    const {data} = this.state
    console.log(data)

    return (
      <div>
        <h1>Jokes</h1>
        {data.map(each => (
          <BlogList each={each} key={each.id} />
        ))}
      </div>
    )
  }
}

export default Home
