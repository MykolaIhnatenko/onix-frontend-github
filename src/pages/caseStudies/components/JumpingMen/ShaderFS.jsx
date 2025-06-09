export default `
      uniform sampler2D map;

            varying vec2 vUv;

            void main() {

                vec4 color = texture2D( map, vUv );
                gl_FragColor = vec4( color.r * 0.4, color.g* 0.8, color.b , 0.2 );

            }
`;
