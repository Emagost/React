# Instalar created react app

npx created-react-app
# Como instalar correctamente enzyme para testeo en REACT 17 (Actualmente enzyme esta disponible para react 16)

# Paso 1. Inst JEST en el proyecto:
npm install --save-dev jest

# P2. Inst la versión de enzime para REACT 17:
npm install --legacy-peer-deps --save-dev @wojtekmaj/enzyme-adapter-react-17

# P3. Add a setupTests.js:
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
Enzyme.configure({ adapter: new Adapter() });

# P4. Inst las dependencias faltantes:
npm install --save-dev enzyme

# P5. Inst enzyme-to-json:
npm install --save-dev enzyme-to-json

# P6. Add a setupTest.js:
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

# P7. Comentar esta linea del setupTest.js:
//import '@testing-library/jest-dom';