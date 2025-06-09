import StoresImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_storesImage.webp';
import ShoppingListImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_shoppingListImage.webp';
import PromotionalImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_promotionalImage.webp';
import LoyaltyProgramImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_loyaltyProgramImage.webp';
import CustomerCardImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_customerCardImage.webp';
import BarcodeScannerImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_barcodeScannerImage.webp';

const functionalities = [
  {
    image: CustomerCardImage,
    imagePosition: 'right',
    title: 'Electronic METRO customer card',
    description: `The customers don’t have to carry a physical card with them any longer.
    Existing customers just need to scan or enter their METRO card number
    in the app to register. When new customers create their account, their
    virtual customer card is issued automatically. When users show the
    customer card screen to the cashier, the latter will scan it to award or spend loyalty bonuses.`,
  },
  {
    image: BarcodeScannerImage,
    imagePosition: 'left',
    title: 'Barcode scanner',
    description: `The handy functionality helps users find out the goods’ current prices
    quickly when they can’t find a price tag. They can scan several products
    in a row, and all scanned products are conveniently saved to a carousel
    at the bottom of the screen. The user can keep all previously scanned
    products on their phone until they decide to delete them.`,
  },
  {
    image: PromotionalImage,
    title: 'Promotional brochures',
    imagePosition: 'right',
    description: `Customers can view METRO’s promotional brochures on their phone
    in the comfort of their homes. Indicating a specific store where
    they’re shopping, they can quickly learn about new promotions.`,
  },
  {
    image: ShoppingListImage,
    title: 'Shopping list',
    imagePosition: 'left',
    description: `Users can create and edit a shopping list and share it with their contacts.
    They can both type the text and add scanned products to the list.
    Soon, they will be able to view an online catalog and add items from it.`,
  },
  {
    image: StoresImage,
    title: 'METRO stores',
    imagePosition: 'right',
    description: `Users can view a map of all stores and their hours of work.
    This feature also provides a convenient way to select the
    closest one as the user’s default store and to set up a route to the nearest store.`,
  },
  {
    image: LoyaltyProgramImage,
    title: 'METRO loyalty program',
    imagePosition: 'left',
    description: `The loyalty program is open to both Individual and B2B customers.
    After a customer registers as a program participant, they are assigned a status.
    B2B customers can also choose the type of reward that is more
    convenient for them — bonuses or discounts. After receiving the status,
    customers start accruing bonuses upon each purchase at any METRO store.
    Every quarter, if they reach a specified total, their status in the loyalty
    program levels up. Currently, there are 4 loyalty levels: Basic, Club, Profi, and Expert.`,
  },
];

export default functionalities;
