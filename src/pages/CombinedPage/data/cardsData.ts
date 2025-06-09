import { ICardsData } from '../interfaces/ICardsData';

const cardsData: ICardsData = {
  '/banska-stiavnica': {
    fileNameKey: '/BanskaStavnica',
    contents: [
      'Setting up regular communication that allows our team and clients to deal with a structured and '
            + 'transparent development process and deliver a valuable final product on time.',
      'Optimizing the scanned town model to enable the virtual reality system to render this model '
            + 'in real-time. The original model included 16 million polygons and 14 textures in 8K resolution.',
      'Сreating realistic water imitation in real-time. In one of the scenarios, the mine was '
            + 'flooding with water after the explosion. We built a simulation of fluid in Houdini and transferred '
            + 'it to Unity.',
      'Implementing a shader for mixing textures based on a heightmap. We developed a shader '
            + 'that blends several materials depending on the vertices\' color. This shader enabled us to '
            + 'achieve a high level of detail and add variety to the cave walls.',
      'Preparing blend shapes used in facial animation to transition between expressions — like '
            + 'a character breaking into a smile from a neutral expression, and batching the character’s jaw movements '
            + 'with actual speech.',
      'Optimizing scanned items from the local museum to provide a high level of historical credibility.',
    ],
  },
  '/construction-vr-mr': {
    fileNameKey: '/VRMicroCase',
    contents: [
      'Setting up an efficient development process to get the VR training simulator up and running '
            + 'as fast as possible',
      'Preparing real-life VR training construction scenarios that allow users to gain on-hand experience '
            + 'in an effective and engaging manner ',
      'Creating realistic graphics and animations to provide an excellent user experience and highly '
            + 'detailed 3D models and 3D environments to immerse trainees in a realistically rendered background',
      'Providing proper gesture-controlled interactions that allow trainees to feel even closer to '
            + 'realistic conditions. Using handheld controllers, learners can directly interact with the virtual '
            + 'environment more flexibly',
      'Implementing the hint system that enables users to train their skills and complete the '
            + 'session successfully',
      'Ensuring true-to-life rope physics that allows trainees to learn how to correctly operate '
            + 'equipment, use harnesses and reproduce their work at height without risks',
    ],
  },
  '/onix-ar-app': {
    fileNameKey: '/OnixARMicroCase',
    contents: [
      'Set up an efficient development process to deliver an AR app with a unique user experience',
      'Ensured the proper functioning of all app features on both iOS and Android platforms',
      'Adapting images to create contrasting markers on a certain brochure page to demonstrate the'
            + ' required information in an interactive way. Users point their camera at a page and it goes live',
      'Provided a convenient and smooth control of 360-degree panoramic views with a gyroscopic camera',
      'Designed smooth animations to achieve a realistic effect when replacing the real world with the'
            + ' virtual picture',
      'Prepared ultra-realistic 3D effects and 360-degree panoramic office views with detailed graphics'
            + ' to provide the most immersive atmosphere',
    ],
  },
  '/one-touch-vr': {
    fileNameKey: '/CinematicVRMicroCase',
    contents: [
      'Set up an efficient development process to build a valuable and reliable VR movie app with a unique'
            + ' user experience',
      'Ensured the proper functioning of all app features on the selected VR platforms: Oculus Rift,'
            + ' Oculus/Samsung GearVR, Oculus Go, Google Daydream, iOS Cardboard, Viveport',
      'Provided ultra-realistic 360-degree, 2D-widescreen, 3D, Barco Escape 3-screen video format with'
            + ' detailed graphics and carefully crafted sound that is merged for the most immersive atmosphere',
      'Reached a glow screen effect by coding a particular shader. When the video begins, smooth'
            + ' light mixing occurs, and it shifts the daylight to the screen light, and then each video frame'
            + ' is squeezed to one color that tones the room light',
      'Achieved a realistic effect by bending the canvas with the help of CurvedUI. It allows users to'
            + ' view and interact with the world space from any angle',
      'Created required antialiasing to avoid pixelated pictures. We turned on mipmaps and also used'
            + ' ResolutionScale (upscale technique) for supporting devices',
    ],
  },
  '/timescope': {
    fileNameKey: '/Timescope',
    contents: [
      'Set up an efficient development process to create a robust VR solution with a unique user experience',
      'Ensured the correct functioning of all app features on the selected VR platforms: iOS/Android '
            + '(Cardboard), Google Daydream, Samsung GearVR, Oculus Rift/Go/Quest, Microsoft Mixed Reality',
      'Built a unique 3D environment that allowed us to preserve the unique visual style of antique photos',
      'Developed a shader that adds depth effect for the left and right eyes to create a sense of presence',
      'Retouched photos manually ensuring the image integrity in stereo mode and placed them in '
            + 'collections/categories for the user\'s convenience',
      'Provided carefully crafted music of that era to reach a fully immersive atmosphere',
    ],
  },
  '/unreal-space': {
    fileNameKey: '/UnrealSpace',
    contents: [
      'Setting up regular communication between our team and client to ensure a structured and transparent '
            + 'development process',
      'Preparing a set of various virtual locations where users will create their own office space for '
            + 'conferencing experiences',
      'Developing a server with which people can book a room where they want to hold a virtual conference',
      'Providing a smooth live stream from a user\'s desktops for dozens of attendees. The screen sharing '
            + 'feature allows increasing participants engagement and conveniently sharing ideas',
      'Building a system of avatars that enables users to personalize themselves and interact with their '
            + 'colleagues using these virtual versions. We used inverse kinematics to ensure the required avatar '
            + 'position at three key points: head, hands, controllers',
      'Creating realistic graphics, highly detailed 3D models, and 3D environments to deliver an exceptional '
            + 'conference experience and immerse users in a realistically rendered background',
      'Implementing voice chat to quickly and effectively communicate and forge a deep connection with '
            + 'other users',
      'Ensuring proper gesture-controlled interactions that allow users to feel even closer to lifelike '
            + 'conditions',
    ],
  },
  '/mixed-reality-holokit': {
    fileNameKey: '/HolokitMicroCase',
    contents: [
      'Set up an efficient development process to get the MR solution up and running on time',
      'Create the low-cost open-source mixed reality experience that includes the HeadKit cardboard headset '
            + 'and TrackKit software',
      'Build a reliable content synchronization system that multiple users can use',
      'Enable support for various mobile devices and new models of augmented reality helmets',
      'Deliver high-quality viewing of virtual objects in the real world through the headset and a smartphone '
            + 'camera. We ensured super-sharp optics quality and a 76-degree diagonal field of view',
      'Provide universal wrapper for ARCore and ARKit. It\'ll seamlessly compile to Android and iOS devices, '
            + 'so users don\'t need to worry about the switch between platforms',
      'Ensure quick app setup, controller support, phone profile system',
      'Redesign the user interface to deliver an exceptional experience and immerse users in a realistic '
            + 'virtual environment',
    ],
  },
  '/unity-dsm': {
    fileNameKey: '/UnityDSM',
    contents: [
      'Set up regular communication that allows our team and clients to deal with a structured development '
            + 'process and produce a reliable product on time',
      'Ensure the correct functioning of all app features on the selected VR platforms: PicoVR, '
            + 'Android/Cardboard, iOS/Cardboard',
      'Implement cloud configuration that allows changing assets (video, thumbnails, icons, categories, text, '
            + 'etc.) remotely and automatically display those changes to all users',
      'Provide a realistic effect to immerse users deeper in virtual reality. Using CurvedUI, we bent the '
            + 'canvas that allowed users to view and interact with the world space from any angle',
      'Prepare 360-degree and 2D user interfaces that work in VR mode and on mobile devices',
      'Сreate a set of templates that can be used for similar applications in the future, as well as an '
            + 'additional standalone application that works without access to the Internet',
    ],
  },
};

export default cardsData;
