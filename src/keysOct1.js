import C1 from './assets/audio/C+.mp3';
import Db1 from './assets/audio/Db+.mp3';
import D1 from './assets/audio/D+.mp3';
import Eb1 from './assets/audio/Eb+.mp3';
import E1 from './assets/audio/E+.mp3';
import F1 from './assets/audio/F+.mp3';
import Gb1 from './assets/audio/Gb+.mp3';
import G1 from './assets/audio/G+.mp3';
import Ab1 from './assets/audio/Ab+.mp3';
import A1 from './assets/audio/A+.mp3';
import Bb1 from './assets/audio/Bb+.mp3';
import B1 from './assets/audio/B+.mp3';

// if dName === bName it's a white key
const keysOct1 = [
    {
        'dName': 'C',
        'bName': 'C',
        'name': 'C',
        'dNameLat': 'do',
        'bNameLat': 'do',
        'sound': C1,
        'letterOnKeyboard': 'w'
    },  {
        'dName': 'C#',
        'bName': 'D♭',
        'name': 'D♭',
        'dNameLat': 'do#',
        'bNameLat': 'ré♭',
        'sound': Db1,
        'letterOnKeyboard': 's'
    },  {
        'dName': 'D',
        'bName': 'D',
        'name': 'D',
        'dNameLat': 'ré',
        'bNameLat': 'ré',
        'sound': D1,
        'letterOnKeyboard': 'x'
    },  {
        'dName': 'D#',
        'bName': 'E♭',
        'name': 'E♭',
        'dNameLat': 'ré#',
        'bNameLat': 'mi♭',
        'sound': Eb1,
        'letterOnKeyboard': 'd'
    },  {
        'dName': 'E',
        'bName': 'E',
        'name': 'E',
        'dNameLat': 'mi',
        'bNameLat': 'mi',
        'sound': E1,
        'letterOnKeyboard': 'c'
    },  {
        'dName': 'F',
        'bName': 'F',
        'name': 'F',
        'dNameLat': 'fa',
        'bNameLat': 'fa',
        'sound': F1,
        'letterOnKeyboard': 'v'
    },  {
        'dName': 'F#',
        'bName': 'G♭',
        'name': 'G♭',
        'dNameLat': 'fa#',
        'bNameLat': 'sol♭',
        'sound': Gb1,
        'letterOnKeyboard': 'g'
    },  {
        'dName': 'G',
        'bName': 'G',
        'name': 'G',
        'dNameLat': 'sol',
        'bNameLat': 'sol',
        'sound': G1,
        'letterOnKeyboard': 'b'
    },  {
        'dName': 'G#',
        'bName': 'A♭',
        'name': 'A♭',
        'dNameLat': 'sol#',
        'bNameLat': 'la♭',
        'sound': Ab1,
        'letterOnKeyboard': 'h'
    },  {
        'dName': 'A',
        'bName': 'A',
        'name': 'A',
        'dNameLat': 'la',
        'bNameLat': 'la',
        'sound': A1,
        'letterOnKeyboard': 'n'
    },  {
        'dName': 'A#',
        'bName': 'B♭',
        'name': 'B♭',
        'dNameLat': 'la#',
        'bNameLat': 'si♭',
        'sound': Bb1,
        'letterOnKeyboard': 'j'
    },  {
        'dName': 'B',
        'bName': 'B',
        'name': 'B',
        'dNameLat': 'si',
        'bNameLat': 'si',
        'sound': B1,
        'letterOnKeyboard': ','
    }
]

export default keysOct1