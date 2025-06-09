import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

const animatedResultsBlockData = {
  title: 'The Onix team faced the following challenges:',
  content: (
    <>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Integration of Motion Elements: Incorporating motion elements seamlessly into the website design
          posed a challenge due to compatibility issues and potential disruptions in user experience.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Optimizing Loading Speed: Animated elements, if not optimized properly, can slow down website
          loading times, affecting user engagement. Onix had to find solutions to balance animation
          quality and loading speed.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Ensuring Cross-Device Compatibility: Different devices and browsers interpret motion elements
          differently. Onix faced the challenge of ensuring their design worked smoothly across various
          devices and platforms.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Timing and Pacing: Creating animations that flow naturally with the content and ensuring that
          the timing and pacing of the movements align with the user&apos;s reading speed and interaction patterns.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent className="!mb-[30px] screen-md:!mb-[20px]" tag="p">
          Visual Consistency: Maintaining a consistent visual style throughout the animations, ensuring
          they align with the overall design theme and branding elements.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText marginAbsent tag="p">
          Complexity vs. Simplicity: Striking a balance between visually engaging complex animations and
          ensuring they do not overwhelm or confuse the users, especially when conveying important information.
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default animatedResultsBlockData;
