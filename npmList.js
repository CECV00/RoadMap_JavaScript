/*

    npm                 JavaScript package manager
    npm access          Set access level on published packages
    npm adduser         Add a registry user account
    npm audit           Run a security audit
    npm bin             Display npm bin folder
    npm bugs            Bugs for a package in a web browser maybe
    npm build           Build a package
    npm bundle          Removed
    npm cache           Manipulates packages cache
    npm ci              Install a project with a clean slate
    npm completion      Tab completion for npm
    npm config          Manage the npm configuration files
    npm dedupe          Reduce duplication
    npm deprecate       Deprecate a version of a package
    npm dist-tag        Modify package distribution tags
    npm docs            Docs for a package in a web browser maybe
    npm doctor          Check your environments
    npm edit            Edit an installed package
    npm explore         Browse an installed package
    npm fund            Retrieve funding information
    npm help            Search npm help documentation
    npm help-search     Get help on npm
    npm hook            Manage registry hooks
    npm init            Create a package.json file
    npm install         Install a package
    npm install-ci-test Install a project with a clean slate and run tests
    npm install-test    Install package(s) and run tests
    npm link            Symlink a package folder
    npm logout          Log out of the registry
    npm ls              List installed packages
    npm org             Manage orgs
    npm outdated        Check for outdated packages
    npm owner           Manage package owners
    npm pack            Create a tarball from a package
    npm ping            Ping npm registry
    npm prefix          Display prefix
    npm profile         Change settings on your registry profile
    npm prune           Remove extraneous packages
    npm publish         Publish a package
    npm rebuild         Rebuild a package
    npm repo            Open package repository page in the browser
    npm restart         Restart a package
    npm root            Display npm root
    npm run-script      Run arbitrary package scripts
    npm search          Search for packages
    npm shrinkwrap      Lock down dependency versions for publication
    npm star            Mark your favorite packages
    npm stars           View packages marked as favorites
    npm start           Start a package
    npm stop            Stop a package
    npm team            Manage organization teams and team memberships
    npm test            Test a package
    npm token           Manage your authentication tokens
    npm uninstall       Remove a package
    npm unpublish       Remove a package from the registry
    npm update          Update a package
    npm version         Bump a package version
    npm view            View registry info
    npm whoami          Display npm username

*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// 02. Functions Parameters
function saludarPersona2 (nombre) {
  console.log(`¡Hola, ${nombre}!`)
}
saludarPersona2('Carlos') // Llama a la función con el argumento "Carlos"

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 02-1. Functions Default Params -
// te permite asignar valores predeterminados a los parámetros de una función.
function saludar2 (nombre = 'Invitado') {
  console.log(`¡Hola, ${nombre}!`)
}

saludar2() // Imprime "¡Hola, Invitado!"
saludar2('Carlos') // Imprime "¡Hola, Carlos!"

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 02-2. Functions Rest Params -
// te permite varias variables en un solo argumento se declara usando ...parametro
function sumar2 (...numeros) {
  let total = 0
  for (const numero of numeros) {
    total += numero
  }
  return total
}
console.log(sumar2(1, 2, 3, 4, 5)) // Imprime 15
