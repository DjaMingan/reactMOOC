import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  ComponentDidMount () {
    console.log('Dishdetail Component ComponentDidMount invoked');
  }

  ComponentDidUpdate (){
    console.log('Dishdetail Component ComponentDidUpdate invoked');
  }

  renderDish(dish) {
      return(
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
      );
  }

  renderComments(comments) {
      if (comments != null)
        return (
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
              <ul className="list-unstyled">
                {comments.map ((comment) => {
                  return (
                      <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {comment.date}</p>
                      </li>
                    );
                })}
              </ul>
          </div>
        );
      else
        return (
          <div>
            <p>NO COMMENTS FOUND</p>
          </div>
      );
  }

render() {

  console.log('Dishdetail Component componentDidMount render invoked');

  if (this.props.dish != null)
    return (
        <div className ="container">
        <div className = "row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
        </div>
        </div>
    );

    else
      return(
        <div></div>
      );
  }

}

export default DishDetail;
