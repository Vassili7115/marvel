// import React, { Component } from "react";

// import Grid from '@material-ui/core/Grid';
// import LinearProgress from '@material-ui/core/LinearProgress';


// import '../stylesheets/displayCharacters.scss'


// class DisplayCharacters extends Component {
//   render() {
//     console.log("2 :", this.props)

//       const { characters } = this.props
//       //regex to delete text between parentheses
//       const parenthese = /\(+\)/;
//       if (characters === null) return <LinearProgress />
//     return(
//       <div>
//         <Grid container className="container-display-characters">
//           <Grid item xs={12}>
//             <h1 className="character-title">Characters</h1>
//           </Grid>
//             {characters.map((character) =>        
//           <Grid className="card-container" item key={character.id}>
//             <img className="picture-card" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
//             <p className="text-card">{character.name.split(parenthese)}</p>
//           </Grid>
//             )}
//             </Grid>
//       </div>
//     );
//   }
// }

// export default DisplayCharacters;