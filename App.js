import React from "react";
import Searchbar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    {
      const response = await unsplash.get("/search/photos", {
        params: { query: term }
      });
      this.setState({ images: response.data.results });
    }
    //console.log(val);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar jabSubmitHo={this.onSearchSubmit} />
        <ImageList image={this.state.images} />

        {/* value get from jabSubmitHo  props from SearchBar file and pass into the onSearchSubmit function */}
      </div>
    );
  }
}

export default App;
