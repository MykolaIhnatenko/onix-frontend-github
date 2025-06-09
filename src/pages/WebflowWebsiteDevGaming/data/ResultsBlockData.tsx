import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../../../components/ResultsBlock/sass/resultsBlock.module.scss';

const resultsBlockDataSecond = {
  title: 'The Onix team faced the following challenges:',
  content: (
    <>
      <VRARContent>
        <ContentText className={styles.contentText}>
          <span style={{ fontWeight: '600' }}>
            Capturing Gaming Identity:
          </span>
          {' '}
          <span style={{ fontWeight: '400' }}>
            One of the challenges was to comprehend and incorporate
            the essence of Game Me&lsquo;s diverse game genres, styles, and audience preferences into
            the design, aiming to create a visual representation that truly reflected their
            unique brand identity in the gaming world.
          </span>
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.contentText}>
          <span style={{ fontWeight: '600' }}>
            Integration of Existing Wireframes:
          </span>
          {' '}
          <span style={{ fontWeight: '400' }}>
            Another challenge involved modifying and
            improving the provided wireframes to conform to contemporary UI/UX standards
            while ensuring they stayed in line with Game Me&lsquo;s overall vision for their website.
          </span>
        </ContentText>
      </VRARContent>

      <VRARContent>
        <ContentText className={styles.contentText}>
          <span style={{ fontWeight: '600' }}>
            Balancing Creativity with Functionality:
          </span>
          {' '}
          <span style={{ fontWeight: '400' }}>
            Ensuring that the website design
            not only exuded creativity but also prioritized easy navigation, accessibility,
            and responsiveness was a significant challenge. In the gaming industry, where user
            engagement holds utmost importance, maintaining this equilibrium between aesthetic
            innovation and practical usability was crucial.
          </span>
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.contentText}>
          <span style={{ fontWeight: '600' }}>
            Color Scheme for Gaming Context:
          </span>
          {' '}
          <span style={{ fontWeight: '400' }}>
            Designing a website for a
            gaming company with a requirement for a calm and pale color
            scheme presented a unique challenge. The typical gaming industry
            often embraces bold, vibrant colors to evoke excitement and energy.
            Balancing the need for a subdued color palette while maintaining the
            allure and engagement associated with gaming required thoughtful color
            selection and strategic use of muted tones to create a harmonious yet
            visually engaging environment.
          </span>
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.contentText}>
          <span style={{ fontWeight: '600' }}>
            Logo Design for Gaming Identity:
          </span>
          {' '}
          <span style={{ fontWeight: '400' }}>
            Crafting a logo that encapsulated Game
            Me&lsquo;s identity within the gaming landscape posed a challenge.
            The logo needed to resonate with gamers, reflecting the brand&lsquo;s
            ethos while being versatile enough to adapt across various digital
            platforms and promotional materials. Incorporating elements that
            symbolized innovation, adventure, or the essence of gaming, while
            ensuring simplicity and recognizability, demanded a nuanced approach
            to logo design specific to the gaming industry.
          </span>
        </ContentText>
      </VRARContent>
    </>
  ),
};

export default resultsBlockDataSecond;
