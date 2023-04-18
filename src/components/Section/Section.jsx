import PropTypes from 'prop-types';
import * as S from './Section.styled';

export const Section = ({ title, children }) => (
  <section>
    <S.Title>{title}</S.Title>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
