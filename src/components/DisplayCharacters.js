// import React, { Component } from "react";

// import Grid from '@material-ui/core/Grid';

// import '../stylesheets/displayCharacters.scss'


// class DisplayCharacters extends Component {
//   render() {
//     console.log("2 :", this.props)

//   const { characters } = this.props
  
//     return(
//       <div>
//         <Grid container>
//           <Grid item xs={12}>
//             <h1 className="character-title">Characters</h1>
//           </Grid>
//             {characters.map((character) =>
//           <Grid className="card-container" item key={character.id}>
//             <img className="picture-card" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
//             <p className="text-card">{character.name}</p>
//           </Grid>
//             )}
//             </Grid>
//       </div>
//     );
//   }
// }

// export default DisplayCharacters;