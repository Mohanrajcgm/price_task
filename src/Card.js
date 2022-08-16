import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card({ data }) {
  return (
    <div className="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {data.memberShip}
          </h5>
          <h6 className="card-price text-center">
            {data.price}
            <span className="period">{data.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {data.features.map((list) => {
              return (
                <li className={!list.enable ? "text-muted" : ""}>
                  <span class="fa-li">
                    {!list.enable ? (
                      <FontAwesomeIcon icon={faTimes} />
                    ) : (
                      <FontAwesomeIcon icon={faCheck} />
                    )}
                  </span>
                  <span>
                    {list.bold ? <strong>{list.name}</strong> : list.name}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
