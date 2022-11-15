import React, {Component} from "react";

import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true
    }

    componentDidUpdate(prevProps) {
      if(this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true
      })
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          })
        })
    }

    render () {

      const { data, loading } = this.state;

      if (loading) {
        return <Spinner />
      }
      return (
        <ErrorBoundry>
          <View { ...this.props } data={ data } />
        </ErrorBoundry>
      )
    }
  }
}

export default withData;