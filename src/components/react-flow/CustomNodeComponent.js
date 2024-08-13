import React from 'react';
import { Handle } from 'react-flow-renderer';
import ReactFlow, { Background } from 'react-flow-renderer';

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
      <h4>{data.label}</h4>
      {data.subDiagram && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <SubDiagram nodes={data.subDiagram.nodes} edges={data.subDiagram.edges} />
        </div>
      )}
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </div>
  );
};

const SubDiagram = ({ nodes, edges }) => {
  return (
    <ReactFlow nodes={nodes} edges={edges} fitView>
      <Background />
    </ReactFlow>
  );
};

export default CustomNodeComponent;
