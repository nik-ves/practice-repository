import styled from "styled-components";

const StyledSidebar = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
`;

export default function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}
