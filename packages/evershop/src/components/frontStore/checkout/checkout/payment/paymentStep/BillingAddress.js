import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';

export function BillingAddress({ useShippingAddress, setUseShippingAddress }) {
  return (
    <div>
      <Field
        type="checkbox"
        formId="checkoutBillingAddressForm"
        name="useShippingAddress"
        onChange={(e) => {
          if (e.target.checked) {
            setUseShippingAddress(true);
          } else {
            setUseShippingAddress(false);
          }
        }}
        label="My billing address is same as shipping address"
        isChecked={useShippingAddress === true}
      />
    </div>
  );
}

BillingAddress.propTypes = {
  setUseShippingAddress: PropTypes.func.isRequired,
  useShippingAddress: PropTypes.bool.isRequired
};
