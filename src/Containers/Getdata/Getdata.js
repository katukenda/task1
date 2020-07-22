import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import Post2 from '../../components/Post2/Post2';

import './Getdata.css';
import Nav from '../../components/Nav/Nav';

class Getdata extends Component{

state ={                //create arrays
    posts: [],
    showMore:[],
    ShowMorePost:true    
}



componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(responce => {
        const posts =responce.data.slice(0,12);   //asign filter data to arry
        const showMore =responce.data.slice(12,37);
        
        const updatePosts = posts.map(post=>{  //map data
            return{
                ...post,   
            }
        })

        

        const updateShowMore =showMore.map(showm=>{
            return{
                ...showm,
            }
        })

      
        this.setState({posts: updatePosts});  //state update
        this.setState({showMore:updateShowMore});


    })
}


showMoreClicked=()=>{     // show and hide the more data option

    const doesShow = this.state.ShowMorePost;
    this.setState({ShowMorePost:!doesShow});
    }

 

render(){

    const posts =this.state.posts.map(post =>{ 
        return <Post key ={post.id} id={post.id} name ={post.name} email={post.email} body={post.body}/>;
       
    })

    const showMore =this.state.showMore.map(showm =>{
        return <Post2 key ={showm.id} id={showm.id} name ={showm.name} email={showm.email} body={showm.body}/>;
    })
   

return(
<div>
    <div>
    <Nav/>
    </div>
   <div>
       <card>
       <section className="Posts">
       {posts} 
       </section>
       </card>
      

       </div>





       {this.state.ShowMorePost === true? 

<button onClick={this.showMoreClicked}>Show More
      </button>
      :

       <div>
       <card>  
       <section className="Posts2">
       {showMore} 
       </section>
       </card>
<button onClick={this.showMoreClicked}>Hide</button>
       </div>
        }
  
   </div>
)
}

}




export default Getdata;
