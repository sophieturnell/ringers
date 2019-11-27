import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PostCard from './PostCard'

class PostsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    console.log('has mounted')
    axios.get('/api/posts')
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
    console.log(this.state)
  }

  render() {
    console.log('has rendered')
    if (!this.state.posts) return null
    console.log(this.state.posts)
    return (

      <section className="section">
        <div className="container">

          
          <Link to={'/posts/new'} className="button is-warning">
            Add a Ringer Request
          </Link>
          
          <div className="columns is-mobile is-multiline">
            {this.state.posts.map(post => (
              <PostCard key={post.id} {...post} />
            ))}

          </div>

        </div>
      </section>

    )
  }

}

export default PostsIndex