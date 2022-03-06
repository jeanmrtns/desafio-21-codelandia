import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
      margin-left: 1.5rem;

      &:last-of-type {
        a {
          border: 1px solid var(--primary);
          transition: background-color 0.3s;

          &:hover {
            background-color: var(--secondary);
            border-color: var(--secondary);
          }
        }
      }
    }
  }
`;

export const Logo = styled.figure``;

export const Link = styled.a`
  padding: 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  justify-content: space-between;
  background-color: inherit;
  color: var(--title);
  font-size: 1rem;
  font-weight: bold;
  svg {
    color: yellow;
    margin-right: 1rem;
}`;