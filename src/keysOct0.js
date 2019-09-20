import C from './assets/audio/C.mp3';
import Db from './assets/audio/Db.mp3';
import D from './assets/audio/D.mp3';
import Eb from './assets/audio/Eb.mp3';
import E from './assets/audio/E.mp3';
import F from './assets/audio/F.mp3';
import Gb from './assets/audio/Gb.mp3';
import G from './assets/audio/G.mp3';
import Ab from './assets/audio/Ab.mp3';
import A from './assets/audio/A.mp3';
import Bb from './assets/audio/Bb.mp3';
import B from './assets/audio/B.mp3';

// if dName === bName it's a white key
const keysOct0 = [
    {
        'dName': 'C',
        'bName': 'C',
        'name': 'C',
        'dNameLat': 'do',
        'bNameLat': 'do',
        'sound': C,
        'letterOnKeyboard': 'a'
    },  {
        'dName': 'C#',
        'bName': 'D♭',
        'name': 'D♭',
        'dNameLat': 'do#',
        'bNameLat': 'ré♭',
        'sound': Db,
        'letterOnKeyboard': 'é'
    },  {
        'dName': 'D',
        'bName': 'D',
        'name': 'D',
        'dNameLat': 'ré',
        'bNameLat': 'ré',
        'sound': D,
        'letterOnKeyboard': 'z'
    },  {
        'dName': 'D#',
        'bName': 'E♭',
        'name': 'E♭',
        'dNameLat': 'ré#',
        'bNameLat': 'mi♭',
        'sound': Eb,
        'letterOnKeyboard': '"'
    },  {
        'dName': 'E',
        'bName': 'E',
        'name': 'E',
        'dNameLat': 'mi',
        'bNameLat': 'mi',
        'sound': E,
        'letterOnKeyboard': 'e'
    },  {
        'dName': 'F',
        'bName': 'F',
        'name': 'F',
        'dNameLat': 'fa',
        'bNameLat': 'fa',
        'sound': F,
        'letterOnKeyboard': 'r'
    },  {
        'dName': 'F#',
        'bName': 'G♭',
        'name': 'G♭',
        'dNameLat': 'fa#',
        'bNameLat': 'sol♭',
        'sound': Gb,
        'letterOnKeyboard': '('
    },  {
        'dName': 'G',
        'bName': 'G',
        'name': 'G',
        'dNameLat': 'sol',
        'bNameLat': 'sol',
        'sound': G,
        'letterOnKeyboard': 't'
    },  {
        'dName': 'G#',
        'bName': 'A♭',
        'name': 'A♭',
        'dNameLat': 'sol#',
        'bNameLat': 'la♭',
        'sound': Ab,
        'letterOnKeyboard': '-'
    },  {
        'dName': 'A',
        'bName': 'A',
        'name': 'A',
        'dNameLat': 'la',
        'bNameLat': 'la',
        'sound': A,
        'letterOnKeyboard': 'y'
    },  {
        'dName': 'A#',
        'bName': 'B♭',
        'name': 'B♭',
        'dNameLat': 'la#',
        'bNameLat': 'si♭',
        'sound': Bb,
        'letterOnKeyboard': 'è'
    },  {
        'dName': 'B',
        'bName': 'B',
        'name': 'B',
        'dNameLat': 'si',
        'bNameLat': 'si',
        'sound': B,
        'letterOnKeyboard': 'u'
    }
]

export default keysOct0