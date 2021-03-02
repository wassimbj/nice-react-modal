import React from 'react'
import { Modal, ModalTitle, ModalBody, ModalFooter } from 'nice-react-modal'

interface Props {
   onClose: () => void
}

export default function LongTextModal({ onClose }: Props) {
   return (
      <Modal onClose={onClose}>
         <ModalTitle> Terms of service </ModalTitle>
         <ModalBody>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Neque sodales ut etiam sit amet nisl purus in. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Adipiscing at in tellus integer feugiat scelerisque varius. Nisl vel pretium lectus quam id leo in. Aliquam purus sit amet luctus venenatis lectus magna. Et malesuada fames ac turpis egestas sed tempus urna et. Amet massa vitae tortor condimentum. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Iaculis nunc sed augue lacus viverra. Dolor sit amet consectetur adipiscing elit. Aenean et tortor at risus viverra adipiscing at in. Mauris cursus mattis molestie a iaculis at erat.

         Placerat orci nulla pellentesque dignissim enim sit amet. Nunc congue nisi vitae suscipit tellus. Morbi non arcu risus quis varius quam quisque id diam. Nec nam aliquam sem et tortor consequat id porta. Tortor at auctor urna nunc id cursus metus. Mauris pharetra et ultrices neque ornare. Volutpat diam ut venenatis tellus in metus. Dictum fusce ut placerat orci. Vitae sapien pellentesque habitant morbi tristique. Nec dui nunc mattis enim. Amet facilisis magna etiam tempor. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Id leo in vitae turpis. Vel risus commodo viverra maecenas accumsan lacus vel. Felis imperdiet proin fermentum leo vel orci. Facilisis volutpat est velit egestas dui id ornare. Vulputate enim nulla aliquet porttitor lacus. Justo nec ultrices dui sapien.

         Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ante metus dictum at tempor commodo ullamcorper a. Nam aliquam sem et tortor consequat id porta. Risus quis varius quam quisque id diam vel. Dictumst quisque sagittis purus sit amet volutpat. Lobortis elementum nibh tellus molestie nunc non blandit. Odio eu feugiat pretium nibh ipsum consequat. Lectus urna duis convallis convallis tellus. Egestas pretium aenean pharetra magna ac placerat. Diam quam nulla porttitor massa id neque. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et.
         Placerat orci nulla pellentesque dignissim enim sit amet. Nunc congue nisi vitae suscipit tellus. Morbi non arcu risus quis varius quam quisque id diam. Nec nam aliquam sem et tortor consequat id porta. Tortor at auctor urna nunc id cursus metus. Mauris pharetra et ultrices neque ornare. Volutpat diam ut venenatis tellus in metus. Dictum fusce ut placerat orci. Vitae sapien pellentesque habitant morbi tristique. Nec dui nunc mattis enim. Amet facilisis magna etiam tempor. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Id leo in vitae turpis. Vel risus commodo viverra maecenas accumsan lacus vel. Felis imperdiet proin fermentum leo vel orci. Facilisis volutpat est velit egestas dui id ornare. Vulputate enim nulla aliquet porttitor lacus. Justo nec ultrices dui sapien.

         Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ante metus dictum at tempor commodo ullamcorper a. Nam aliquam sem et tortor consequat id porta. Risus quis varius quam quisque id diam vel. Dictumst quisque sagittis purus sit amet volutpat. Lobortis elementum nibh tellus molestie nunc non blandit. Odio eu feugiat pretium nibh ipsum consequat. Lectus urna duis convallis convallis tellus. Egestas pretium aenean pharetra magna ac placerat. Diam quam nulla porttitor massa id neque. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et.
         </ModalBody>
         <ModalFooter>
            <span className="px-5 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 transition rounded-full cursor-pointer" onClick={onClose}> Refuse </span>
            <button type="submit" className="px-5 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full" form="reportForm"> Accept </button>
         </ModalFooter>
      </Modal>
   )
}
