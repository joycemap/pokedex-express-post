var React = require('react');
class Pokepages extends React.Component {
render() {
    let formUrl = "/pokemon/"+this.props.id+"?_method=delete"; //changed method and formUrl
return (
<html>
<body>
<div>
<h1>Pokemon Name: { this.props.name }</h1>
<h2>Details</h2>
<img src={this.props.img}></img>
<ul>
<li>ID: {this.props.id}</li>
<li>Number: {this.props.num}</li>
<li>Height: {this.props.weight}</li>
<li>Weight: {this.props.height}</li>
</ul>
</div>
<form action={formUrl} method="POST"><input name ="delete" input type="submit"/></form>

</body>
</html>
);
}
}

module.exports = Pokepages;