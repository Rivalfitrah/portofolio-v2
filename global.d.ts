export { };

declare module '*.glb';
declare module '*.png';

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
