import React, { Component } from 'react';

import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import classes from './Getdata.css';
import Post from '../../components/Post/Post';
import * as GetdataActions from '../../store/actions/index';

class Getdata extends Component {
    state = {
        ShowMorePost: true
    }

    componentDidMount() {
        this.props.onSetData();

    }

    showMoreClicked = () => {     // show and hide the more data option
        const doesShow = this.state.ShowMorePost;
        this.setState({ ShowMorePost: !doesShow });
    }



    render() {


        const posts = this.props.showposts.map(post => {
            return <Post key={post.id} id={post.id} name={post.name} email={post.email} body={post.body} />;

        })

        const showMore = this.props.showmorepost.map(post => {
            return <Post key={post.id} name={post.name} id={post.id} body={post.body} email={post.email} />

        })



        return (
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <card>
                        <section className="Posts">
                            {posts}
                        </section>
                    </card>
                </div>
                {this.state.ShowMorePost === true ?

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



const mapStateToProps = state => {

    return {
        showmorepost: state.get.showMore,
        showposts: state.get.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetData: () => dispatch(GetdataActions.setData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Getdata);